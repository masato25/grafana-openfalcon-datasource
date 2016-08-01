define([
  'lodash',
  'jquery'
],
function (_, $) {
  'use strict';

  var index = [];
  var categories = {
    Compute: [],
    Limit: []
  };

  function addFuncDef(funcDef) {
    funcDef.params = funcDef.params || [];
    funcDef.defaultParams = funcDef.defaultParams || [];

    if (funcDef.category) {
      funcDef.category.push(funcDef);
    }
    index[funcDef.name] = funcDef;
    index[funcDef.shortName || funcDef.name] = funcDef;
  }

  var optionalSeriesRefArgs = [
    { name: 'other', type: 'value_or_series', optional: true },
    { name: 'other', type: 'value_or_series', optional: true },
    { name: 'other', type: 'value_or_series', optional: true },
    { name: 'other', type: 'value_or_series', optional: true },
    { name: 'other', type: 'value_or_series', optional: true }
  ];

  // addFuncDef({
  //   name: 'scaleToSeconds',
  //   category: categories.Transform,
  //   params: [{ name: 'seconds', type: 'int' }],
  //   defaultParams: [1],
  // });
  //
  addFuncDef({
    name: 'avgCompare',
    category: categories.Compute,
    params: [{ name: 'cond', type: 'string' }],
    defaultParams: ['>'],
  });

  addFuncDef({
    name: 'top',
    category: categories.Limit,
    params: [
      { name: 'limit', type: 'int' },
      { name: 'orderby', type: 'string', options: ['desc','aesc'] },
      { name: 'sortby', type: 'string', options:['Mean','Max','Min'] }
    ],
    defaultParams: [3,'desc','Mean'],
  });

  addFuncDef({
    name: 'sumAll',
    category: categories.Compute,
    params: [{ name: 'aliasName', type: 'string' }],
    defaultParams: ['sumAll'],
  });

  addFuncDef({
    name: 'limit',
    category: categories.Limit,
    params: [{ name: 'limit', type: 'int' }],
    defaultParams: [10],
  });

  addFuncDef({
    name: 'topDiff',
    category: categories.Compute,
    params: [
      { name: 'limit', type: 'int' },
      { name: 'orderby', type: 'string', options: ['desc','aesc'] },
      { name: 'sortby', type: 'string', options:['Mean','Max','Min'] }
    ],
    defaultParams: [3,'desc','Mean'],
  });

  _.each(categories, function(funcList, catName) {
    categories[catName] = _.sortBy(funcList, 'name');
  });

  function FuncInstance(funcDef, options) {
    this.def = funcDef;
    this.params = [];

    if (options && options.withDefaultParams) {
      this.params = funcDef.defaultParams.slice(0);
    }

    this.updateText();
  }

  FuncInstance.prototype.render = function(metricExp) {
    var str = this.def.name + '(';
    var parameters = _.map(this.params, function(value, index) {

      var paramType = this.def.params[index].type;
      if (paramType === 'int' || paramType === 'value_or_series' || paramType === 'boolean') {
        return value;
      }
      else if (paramType === 'int_or_interval' && $.isNumeric(value)) {
        return value;
      }

      return "'" + value + "'";

    }, this);

    if (metricExp) {
      parameters.unshift(metricExp);
    }

    return str + parameters.join(', ') + ')';
  };

  FuncInstance.prototype._hasMultipleParamsInString = function(strValue, index) {
    if (strValue.indexOf(',') === -1) {
      return false;
    }

    return this.def.params[index + 1] && this.def.params[index + 1].optional;
  };

  FuncInstance.prototype.updateParam = function(strValue, index) {
    // handle optional parameters
    // if string contains ',' and next param is optional, split and update both
    if (this._hasMultipleParamsInString(strValue, index)) {
      _.each(strValue.split(','), function(partVal, idx) {
        this.updateParam(partVal.trim(), idx);
      }, this);
      return;
    }

    if (strValue === '' && this.def.params[index].optional) {
      this.params.splice(index, 1);
    }
    else {
      this.params[index] = strValue;
    }
    console.log("updateParam", this.params)
    this.updateText();
  };

  // FuncInstance.prototype.updateText = function () {
  //   if (this.params.length === 0) {
  //     this.text = this.def.name + '()';
  //     return;
  //   }
  //   var text = this.def.name + '(';
  //   text += this.params.join(', ');
  //   text += ')';
  //   console.log("updateText", text)
  //   this.text = text;
  // };

  FuncInstance.prototype.updateText = function () {
    var text = { function: this.def.name };
    var defparams = this.def.params
    //remove uncessary params
    this.params = this.params.slice(0,defparams.length);
    _.each(this.params, function(value, indx){
      text[defparams[indx].name] = value
      return
    })
    this.text = JSON.stringify(text);
    if( typeof this.funcs == "undefined"){
      this.funcs = [JSON.stringify(text)]
    }else{
      this.funcs.push(JSON.stringify(text))
    }
  };

  return {
    createFuncInstance: function(funcDef, options) {
      if (_.isString(funcDef)) {
        if (!index[funcDef]) {
          throw { message: 'Method not found ' + name };
        }
        funcDef = index[funcDef];
      }
      return new FuncInstance(funcDef, options);
    },

    getFuncDef: function(name) {
      return index[name];
    },

    getCategories: function() {
      return categories;
    }
  };

});
