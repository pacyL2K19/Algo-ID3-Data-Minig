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
    
            pP1 = tabP1.length/pData.length;
            pP2 = tabP2.length/pData.length;
    
            const Hx = -(pP1*Math.log2(pP1) + pP2*Math.log2(pP2));
            return Hx
    
        } else {
            //if the primary class is not binary ...
        }
    }

    /**
     * To calculate entropia, we need : 
     * The name of the field we're browsing
     * 
     */

    const calculateEntropia = () => {

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