export function createOptions(match = {}) {
    const stageOptions = ['Group Stage', 'Round of 16', 'Round of 8', 'Quarter-final', 'Semi-final', 'Final'];

    const options = stageOptions.map(stage => { 

        const option = {
            label: stage,
            value: stage,
            selected: match.stage === stage
        }

        return option;
    })

    return options;
}