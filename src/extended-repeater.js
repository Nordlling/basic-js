module.exports = function repeater(str, options) {
    if (options.separator === undefined ) options.separator = "+"
    if (options.additionSeparator === undefined ) options.additionSeparator = "|"
    if (options.repeatTimes === undefined ) return str+options.addition	
    
	additionStr = `${options.addition}${options.additionSeparator}`.repeat(options.additionRepeatTimes)
	additionStr = additionStr.split("")
    additionStr.splice(additionStr.length - options.additionSeparator.length, options.additionSeparator.length)
    additionStr = additionStr.join("")

	additionStr += options.separator
	str = `${str}${additionStr}`.repeat(options.repeatTimes)
	str = str.split("")
    str.splice(str.length - options.separator.length, options.separator.length)
    str = str.join("")
    return str
};

  