 // Rest Operator
 console.groupCollapsed('Rest Operator');

 function sumOf(...args) {
    console.log('args:', args);

    let sum = 0;

    args.forEach((arg) => (sum += arg));

    return sum;
 }

 const testCalculation = sumOf(1, 2, 5, 8);

 console.log('testCalculation:', testCaclulation);
 console.groupEnd();

 // Spread Operator
 const ninthGraders = ['Jennifer', 'Berry', 'Ashley', 'Bernard'];
 const tenthGraders = ['Jason', 'Amy', 'Samuel', 'Cook'];
 const completeListOfStudents = [...ninthGraders, ...tenthGraders];

 console.groupCollapsed('Spread Operator');
 console.log('completeListOfStudents:', completeListOfStudents);
 console.groupEnd();

 // SPREAD VS REST REVIEW:
 /*
The rest operator takes the values of specific data and makes it into an array whereas the spread operator takes values from arrays and makes them into specific elements

Some real world uses of the Rest Operator would be to output any number of messages or to be able to change the output of the function callback by calling it with different parameters
Some real world uses of the Spread Operator would be if you have a list of grades/names and you only want to return specific names out of the array you would use your spread operator
 */