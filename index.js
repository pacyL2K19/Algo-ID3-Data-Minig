/**
 * @author Pacifique LINJANJA
 */


(function () {
    const data = [
        {M: 'Moyen', A : 'Moyen', R : 'Village', E : 'oui', I : 'oui'},
        {M: 'Elevee', A : 'Moyen', R : 'Bourg', E : 'non', I : 'non'},
        {M: 'Faible', A : 'Agee', R : 'Bourg', E : 'non', I : 'non'},
        {M: 'Faible', A : 'Moyen', R : 'Bourg', E : 'oui', I : 'oui'},
        {M: 'Moyen', A : 'Jeune', R : 'Ville', E : 'oui', I : 'oui'},
        {M: 'Elevee', A : 'Agee', R : 'Ville', E : 'oui', I : 'non'},
        {M: 'Moyen', A : 'Agee', R : 'Ville', E : 'oui', I : 'non'},
        {M: 'Faible', A : 'Moyen', R : 'Village', E : 'non', I : 'non'},
    ];
    
    const className = 'I'
    
    /**
     * To calculate enthropia, we need :
     * @ClasssName : the principal class which is going to allow us to take decision
     * @data : the entire array of 
     */
    
    const calculateGlobalEntropia  = (pClassName, pData) => {
        if (isBinary(pClassName)) {
            const Hx; // the entropia
            const values = getNumberOfInstance(data, pClassName).values;
            let pP1 = 0; //proportions 
            let pP2 = 0;
            let tabP1 = [];
            let tabP2 = [];
            let p1 = values[0];
            let p2 = values[1];
            for (d of data) {
                if (d[className] === p1) {
                    tabP1.push(' ');
                } else if (d[className] === p2) {
                    tabP2.push(' ')
                }
            }

            if (pP1 !== 0 && pP2 !== 0) {
                pP1 = tabP1.length/pData.length;
                pP2 = tabP2.length/pData.length;
        
                Hx = -(pP1*Math.log2(pP1) + pP2*Math.log2(pP2));
            } else {
                Hx = 0; // To handle probable exceptions while calculing the log 
            }
    
            return Hx
    
        } else {
            //if the primary class is not binary ...
        }
    }
    /**
     * This method is going to calculate the entropia of the specific attribute
     * Needs : 
     * The name of the attribute
     * data array 
     */
    const calculateEntropia = (pAttribute, pData) => {
        if (pData[0][pAttribute]) {
            let i = 0;
            numbOfPertinancies = [];
            pPTab = [] // this tab gonna contain all the proportions
            values = getNumberOfInstance(pData, pAttribute).values;
            // get number of instances of the primary attribute

            mainValues = getNumberOfInstance(pData, className).values;
            if (isBinary(className)) {
                // We're sure to have only to possibilities
                
                for (value of values) {
                    numbOfPertinancies[i] = 0;
                    i ++;
                }
                for (data of pData) {

                }
            } else {
                // to be handled
            }
        } else {
            // An error "bruit" 
            // to be handled
        }
    }
    /**
     * To calculate Gain, we need, the global enthropia, and the name of the field we need to evaluate
     * Eventually the enthropia of the corresponding field
     */
    const calculateGain = () => {
    
    }
    
    /**
     * This method is gonna help us to determin the number of instances
     * After it'll decide if the class i binary or not
     * takes a field of the array as a parameter and the entire data
     */
    
    const getNumberOfInstance = (data, field) => {
        let numberOfInstances = 0;
        let currentValue = '';
        let values = [];
        for (d of data) {
            console.log(d.field)
            if (d[field] !== currentValue) {
                numberOfInstances ++;
                currentValue = d[field]
                values.push(d[field]);
            }
        }
        return {
            field,
            numberOfInstances,
            values
        }
    }
    
    /**
     * The method thst helps us to decide if the class is binary
     */
    
    const isBinary = (field) => {
        const keys = getNumberOfInstance(data, field).numberOfInstances;
        let decision = false;
        keys === 2 ? decision = true : decision = false;
        return decision;
    }
    // console.dir(calculateGlobalEntropia('I', data)) ;
} ())