public class ObjetoGrafico {

    private Integer posx;
    private Integer posy;
    private char direccion;

    public ObjetoGrafico(Integer posx, Integer posy, char direccion) {
        this.posx = posx;
        this.posy = posy;
        this.direccion = direccion;
    }

    public void irA (Integer posx, Integer posy, char direccion){
        this.posx = posx;
        this.posy = posy;
        this.direccion = direccion;
    }

    public char getDireccion() {
        return direccion;
    }

    public void setDireccion(char direccion) {
        this.direccion = direccion;
    }
}
