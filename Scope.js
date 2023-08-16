const global = "This is a global scope variable";

function local() {
    const local = "This is a local scope variable"
    console.log(global) // This value is accessible;
}
console.log(local) // This value don't accessible;