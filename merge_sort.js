const fs = require('fs');

class Merge{
    constructor(fileName) {
        this.fileName = fileName;
        this.data = this.readDataFromFile();
        this.parsedData = this.parseData();
        this.comparisons = 0
    }

    readDataFromFile() {
        try {
            return fs.readFileSync(this.fileName, 'utf8');
        } catch (error) {
            console.error(error.message);
            return null;
        }
    }

    parseData() {
        if (!this.data) return null;
        return this.data.split(" ").map((element) => parseInt(element));
    }

    mergeSort(array){
        if(array.length <=1){
            return array
        }

        const middle = Math.floor(array.length / 2);
        const left = this.mergeSort(array.slice(0, middle))
        const right = this.mergeSort(array.slice(middle))
        return this.merge(left, right)
    }

    merge(left, right){
        let i = 0;
        let j = 0;
        let result = []
        while(i < left.length && j < right.length){
            if(right[j] > left[i]){
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++
            }
        };

        while(i < left.length){
            result.push(left[i]);
            i++;
            
        };
        while(j < right.length){
            result.push(right[j]);
            j++;
        };
        this.comparisons++
        return result
    }



}
const fileName = process.argv[2];
const sortingMerge = new Merge(fileName);

let sortedArray = sortingMerge.mergeSort(sortingMerge.parsedData)
console.log(`Voici notre array trié: ${sortedArray} avec SEULEMENT : ${sortingMerge.comparisons} comparaison(s) !`)