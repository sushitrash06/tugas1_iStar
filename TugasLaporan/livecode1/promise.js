const executorFunction = (resolve, reject) => {
    const iscoffemakerready = false;
    if (iscoffemakerready) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan!")

    }
}

const handlersuccess = resolvedvalue => {
    console.log(resolvedvalue);
}

const handlerrejected = rejectionreason => {
    console.log(rejectionreason);
}

const makeCoffe = new Promise(executorFunction);
makeCoffe.then(handlersuccess, handlerrejected);

