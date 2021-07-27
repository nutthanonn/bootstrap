const greeting = (name) => {
    console.log(`Hello ${name}`);
}


const  result =  (fname, lname, callback) => {
    const fullName = `${fname} ${lname}`

    callback(fullName)
}

result('Nutthanon', 'Thongcharoen', greeting)