import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingresa un numero para saber si es primo");

        Integer numero = scanner.nextInt();

        if (esPrimo(numero)) {
            System.out.println(numero + "es primo");
        } else {
            System.out.println( numero + "no es primo");
        }

        System.out.println(numero);

    }

    public static Boolean esPrimo(Integer numero){
        int contador = 2;
        boolean primo=true;
        while ((primo) && (contador!=numero)){
            if (numero % contador == 0)
                primo = false;
            contador++;
        }
        return primo;
    }

}