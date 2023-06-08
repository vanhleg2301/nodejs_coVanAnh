

function listInte(input) {
    var input = document.getElementById("input").value;

    var numbers = input.split(" ").map(Number);

    var max = Math.max(...numbers);
    var min = Math.min(...numbers);

    document.getElementById("max").value = max;
    document.getElementById("min").value = min;

    var prime = getPrimeNumbers(numbers);
    if (!isPositiveInteger(input)) {
        alert("input string does not present positive integer numbers");
        return;
    }

    document.getElementById("list").value = prime.join(" ");

    function getPrimeNumbers(numbers) {
        var primes = [];

        // Check if a number is prime
        function isPrime(num) {
            for (var i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        }

        // Iterate through the numbers array and find prime numbers
        for (var i = 0; i < numbers.length; i++) {
            if (isPrime(numbers[i])) {
                primes.push(numbers[i]);
            }
        }
        return primes;
    }

    function isPositiveInteger(value) {
        // Use a regular expression to check if the value is a positive integer
        var pattern = /^[1-9]\d*$/;
        return pattern.test(value);
    }
}