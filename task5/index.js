// Pipe pattern

const mulTwo = (n) => n * 2

const subFour = (n) => n - 4

const pipe = (...funcs) => {
    return (n) => {
        let cur = n
        for (let func of funcs) {
            cur = func(cur)
        }
        return cur
    }
}

// Memo-pattern 

const sum = (a, b) => a + b

const memo = (func) => {
    let cache = {}
    return (...args) => {
        const prop = `${func}(${args})`
        if (cache.hasOwnProperty(prop)) {
            return cache[prop]
        }
        const res = func(...args)
        cache[prop] = res
        return res
    }
}

const memedSum = memo(sum);

// Apply polyfill

const custApply = function(context = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error(this + "isn't callable!")
    }
    if (!Array.isArray(arg)) {
        throw new TypeError('Non-array passed to args!')
    }
    context.fn = this
    context.fn(...args)
}

// Function.prototype.apply = custApply

// Codewars task no.1

const multiplyAll = (arr) => {
    return (n) => {
        return arr.map(x => x * n);
    }
}

// Codewars task no.2

const arrayDiff = (a, b) => {
    return a.filter((num) => !b.includes(num))
}