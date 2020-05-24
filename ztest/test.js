// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {

    function recursion(T, values) {
        let rightPath = 0
        let leftPath = 0
        if (values.includes(T.x) || (!T.left && !T.right)) {
            return 0
        } else {
            values.push(T.x)
            if (T.left) {
                leftPath = recursion(T.left, values) + 1
            }

            if (T.right) {
                rightPath = recursion(T.right, values) + 1
            }
            return Math.max(leftPath, rightPath)
        }
    }

    return recursion(T, []);
}


console.log(solution([1, 8, 7, 3, 4, 1, 8], [6, 4, 1, 8, 5, 1, 7]));