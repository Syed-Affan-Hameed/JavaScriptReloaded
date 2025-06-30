const role = 'developer';
console.log(`Your role is: ${role}`);

switch (role) {
    case 'admin':
        console.log('You have full access');
        break;
    case 'editor':
        console.log('You can edit content');
        break;
    case 'viewer':
        console.log('You can view content');
        break;
    default:
        console.log('Role not recognized');
}
