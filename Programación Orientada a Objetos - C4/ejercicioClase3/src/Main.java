import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        System.out.println("Juego piedra-papel-tijera");
        Scanner scaner = new Scanner(System.in);

        System.out.println("Juagador 1: Indique su seleccion [1=Piedra, 2=Papel, 3=Tijera]: ");
        int seleccionUsuario1 = scaner.nextInt();

        System.out.print("Juagador 2: Indique su seleccion [1=Piedra, 2=Papel, 3=Tijera]: ");
        int seleccionUsuario2 = scaner.nextInt();

        System.out.print("El jugador 1 escogió: " + seleccionUsuario1 );
        switch ( seleccionUsuario1 )
        {
            case 1:
                System.out.println("Piedra");
                switch ( seleccionUsuario2 )
                {
                    case 1: System.out.println("Empate!"); break;
                    case 2: System.out.println("Gana Jugador 2"); break;
                    case 3: System.out.println("Gana Jugador 1"); break;
                }
                break;

            case 2:
                System.out.println("Papel");
                switch ( seleccionUsuario2 )
                {
                    case 1: System.out.println("Gana Jugador 1"); break;
                    case 2: System.out.println("Empate!"); break;
                    case 3: System.out.println("Gana Jugador 2"); break;
                }
                break;

            case 3:
                System.out.println("Tijera");
                switch ( seleccionUsuario2 )
                {
                    case 1: System.out.println("Gana Jugador 2"); break;
                    case 2: System.out.println("Gana Jugador 1"); break;
                    case 3: System.out.println("Empate!"); break;
                }
                break;
        }
    }
}