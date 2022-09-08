public class Main {
    public static void main(String[] args) {

        ObjetoGrafico spaceship = new ObjetoGrafico(2, 5, 'N');

        System.out.println(spaceship.getDireccion());

        Nave apolo3 = new Nave(2, 4, 'S', 15.5);

        System.out.println(apolo3.getDireccion());

        apolo3.girar('O');

        System.out.println(apolo3.getDireccion());
    }
}