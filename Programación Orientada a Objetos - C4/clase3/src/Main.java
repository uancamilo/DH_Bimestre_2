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

    }

    Integer cantidadPaquetes = cuantosPaquetesNecesita(cantidadParaEstarLleno);

        System.out.println(nombre + " consumio " + cantidadPaquetes + " paquetes");
}

    public static Integer cuantoConsume (Double cantidad) {
        Scanner scanner = new Scanner(System.in);

        Double cantidadDeConsumo = 0.0;

        Integer cantidadPaquetes = 0;

        while (cantidad >= cantidadDeConsumo){
            System.out.println("Cuantos kilos tiene el paquete");
            Double pesoPaquete = scanner.nextDouble();
            cantidadDeConsumo += pesoPaquete;
            cantidadPaquetes++;

        }
        return cantidadPaquetes;
    }
}