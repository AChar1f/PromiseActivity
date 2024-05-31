document.querySelector('[division]').addEventListener('click', division)

function division() {
    let v1 = document.querySelector('[V1]').value
    let v2 = document.querySelector('[v2]').value
    let output = document.querySelector('[output]')

    let myPromise = new Promise((resolve, reject) => {
        if ((v1 < 1) || (v2 < 1))
            reject('Oops... Something went wrong. Please contact our support team.')
        else 
            resolve(v1 / v2)
    })
    myPromise.then(value => {
        output.textContent = value
    }) .catch(value => {
        output.textContent = value
    })
}