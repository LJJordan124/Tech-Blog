
const globals = {};

module.exports = {
    formatDate: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
        ).getFullYear()}`;
    },
    isLocalUser: userId => {
        const localUserId = globals.userId;
        if (localUserId === null || localUserId === undefined) {
            console.log('no local user id was defined');
            return;
        }

        const isLocalUser = localUserId === userId;

        console.log('is local user: ', isLocalUser);
        return isLocalUser;
    },
    print: data => console.log('from helper: ', data),
    setGlobalVar: (key, value) => {
        globals[key] = value;
        console.log('set global key: ', key, ' to value: ', value);
        // return 'set global key';
    },
    getGlobalVar: key => {
        const value = globals[key];
        console.log('got global key: ', key, ' who\'s value is: ', value);
        return value;
    },
    notEmpty: arr => arr.length > 0
}