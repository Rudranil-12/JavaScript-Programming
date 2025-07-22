// function vowel(str) {
//     let count = 0;
//     for(const char of str){
//             if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//                 count ++;
//             }
//         }
//     console.log(count);
//     }


// vowel("Rudra");

// Same task using ARROW FUNCTION

const countVow = (str) => {
        let count = 0;
        for(const char of str){
                if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                    count ++;
                }
            }
        console.log(count);
        }
    countVow("Rudra");