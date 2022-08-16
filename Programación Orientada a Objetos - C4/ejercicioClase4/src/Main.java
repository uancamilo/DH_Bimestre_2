public class Main {
    public static void main(String[] args) {

        UsuarioJuego usuario1 = new UsuarioJuego("Carlos", "123");

        usuario1.aumentaPuntaje();
//        System.out.println(usuario1.getNombre());
//
//        usuario1.setNombre("Karen");
//
//        System.out.println(usuario1.getNombre());

        System.out.println(usuario1.getPuntaje());

        usuario1.bonus(5.0);


    }
}