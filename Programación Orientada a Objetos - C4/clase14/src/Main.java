public class Main {
    public static void main(String[] args) {

        Capitan capitan = new Capitan("Juan", "Serna", "1");
        Velero velero = new Velero(capitan, 2000.0, 500.0,2021,6.0,4);

        System.out.println(velero.calcularAlquilar());

    }
}