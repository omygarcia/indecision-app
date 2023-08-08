import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter';

describe('Counter Component',()=>{
    let wrapper = null;

    beforeEach(()=>{
        wrapper = shallowMount(Counter);
    });
    /*
    test('debe hacer match con el snapshot ', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    });
    */
   
    test('h2 debe tener el valor por defecto Counter ', () => {

        expect(wrapper.find('h2').exists()).toBeTruthy();

        const h2Value = wrapper.find('h2').text();
        //console.log(h2.text());
        expect(h2Value).toBe('Contador');
    })

    test('el valor por defecto debe ser 100 en el p', () => {
        const p = wrapper.find('[data-testid="counter"]');
        expect(p.text()).toBe('100');
    });

    test('debe incrementar y decrementar el valor del contador', async() => {
        const [btnIncrease,btnDecrease] = wrapper.findAll('button');
        await btnIncrease.trigger('click');
        await btnIncrease.trigger('click');
        await btnIncrease.trigger('click');
        await btnDecrease.trigger('click');
        await btnDecrease.trigger('click');

        const value2 = wrapper.find('[data-testid="counter"]').text();
        expect(value2).toBe("101");
    });

    test('debe establecer el valor por defecto', () => {
      //console.log(wrapper.props());
      const start = wrapper.props('start');
      //console.log(typeof start);
      const value = wrapper.find('[data-testid="counter').text();
      expect(Number(value)).toBe(start);
    });

    test('debe de mostrar la prop title', () => {
        const title = 'Hola Mundo!!';
      const wrapper = shallowMount(Counter,{
        props:{
            title:title
        }
      });
      //console.log(wrapper.html());
      expect(wrapper.find('h2').text()).toBe(title);
    })
});