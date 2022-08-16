import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingresar nombre");

        String nombre = scanner.nextLine();

        System.out.println("Hola " +  nombre);

        //bucles

        System.out.println("Hasta que numero queres contar.");

        Integer numero = scanner.nextInt();

        for(int i = 1; i <= numero ; i++) {
            System.out.println(i);
        }
    }
    //funciones

    public static Boolean esDivisible(Integer numero1, Integer numero2) {
        return numero1 % numero2 == 0;
    }
}