import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // pedir el nombre del perro

        System.out.println("nombre del perro");

        String nombre = scanner.nextLine();

        //pedir consumo de comida

        System.out.println("Cuanta comida consume");

        Double cantidadConsumir = scanner.nextDouble();

        //funcion que pida la cantidad de comida y retorna cuantos paquetes se consumieron

        Integer cantidadPaquetes = paquetesRequeridos(cantidadConsumir);

        System.out.println(nombre + " consumio " + cantidadPaquetes + " paquetes");

    }

    public static Integer paquetesRequeridos(Double cantidadTotaldeComida) {
        Scanner scanner = new Scanner(System.in);
        Double cantidadConsumida = 0.0;

        Integer cantidadPaquetes = 0;

        while (cantidadTotaldeComida >= cantidadConsumida) {

            System.out.println("Cuantos kilos tienes el paquete");
            Double pesoPaquete = scanner.nextDouble();
            cantidadConsumida += pesoPaquete;
            cantidadPaquetes ++ ;

        }
        return cantidadPaquetes;
    }
}