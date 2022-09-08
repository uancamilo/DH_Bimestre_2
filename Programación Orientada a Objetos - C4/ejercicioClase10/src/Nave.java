public class Nave extends ObjetoGrafico {
    private Double velocidad;
    private Integer vida;

    public Nave(Integer posx, Integer posy, char direccion, Double velocidad) {
        super(posx, posy, direccion);
        this.velocidad = velocidad;
        this.vida = 3;
    }

    @Override
    public void irA(Integer posx, Integer posy, char direccion) {
        super.irA(posx, posy, direccion);
    }

    public void girar(char direccion) {
        if (super.getDireccion() != direccion){
            super.setDireccion(direccion);
        }
    }
}
