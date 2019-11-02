function solve(arr) {
    const hours = arr.shift().split(' ').map(Number);

    arr.forEach(command => {
        command = command.split(' ');
        const comm = command.shift();

        switch (comm) {
            case'Complete':
            case'Change':
            case'Drop':
                const index = +command.shift();
                const time = command.length ? +command.shift() : comm === 'Drop' ? -1 : 0;

                if (index >= 0 && index < hours.length) {
                    hours[index] = time;
                }
                break;
            case'Count':
                const com = command.shift();

                switch (com) {
                    case 'Completed':
                        console.log(hours.filter(hour => hour === 0).length);
                        break;
                    case 'Incomplete':
                        console.log(hours.filter(hour => hour > 0).length);
                        break;
                    case 'Dropped':
                        console.log(hours.filter(hour => hour === -1).length);
                        break;
                }
                break;
        }
    });

    console.log(hours.filter(hour => hour > 0).join(' '));
}
