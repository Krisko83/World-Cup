export function createOptions(match = {}) {
    const stageOptions = ['Group Stage', 'Round of 16', 'Round of 8', 'Quarter-final', 'Semi-final', 'Final'];

    const options = stageOptions.map(stage => {
        // const value = stage.toLowerCase().replaceAll(' ','-');
    
        const option = {
            label: stage,
            value: stage,
            selected: stage.value === stage
        }

        return option;
    })

    return options;
}