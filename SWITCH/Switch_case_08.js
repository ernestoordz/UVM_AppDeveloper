let nivelUsuario = 'editor';
switch (nivelUsuario) {
    case 'admin':
        console.log("Todos los permisos");
        break;
    case 'editor':
        console.log("Permisos de edición");
        break;
    case 'visitante':
        console.log("Permisos de lectura");
        break;
    default:
        console.log("Nivel de usuario inválido");
}