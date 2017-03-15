// JavaScript source code
'use strict';

var filterStack= function (array){

    this.array = array
    return this
            };

    filterStack.prototype.limitBy= function (num) {
            this.array = this.array.slice(0, num)
            return this
    }

    filterStack.prototype.orderBy = function (framewrk, sortparam ,order) {
        var a = _.orderBy(this.array, this.order)
        return _.orderBy(this.array, sortparam , this.order)
    }


    filterStack.prototype.filterBy=function(filter){
            this.array = this.array.filter(function(item) {
                return item.id.indexOf(filter) > -1
            })
            return this
        }

    filterStack.prototype.apply=function() {
            return this.array
        
    };

    var f = function(array) {
        return new filterStack(array)
    };