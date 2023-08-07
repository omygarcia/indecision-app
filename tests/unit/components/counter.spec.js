import {shallowMount} from '@vue/test-utils'
import Counter from '@/components/Counter';

describe('Counter Component',()=>{
    /*
    test('debe hacer match con el snapshot ', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    });
    */
   
    test('h2 debe tener el valor por defecto Counter ', () => {
        const wrapper = shallowMount(Counter);

        expect(wrapper.find('h2').exists()).toBeTruthy();

        const h2Value = wrapper.find('h2').text();
        //console.log(h2.text());
        expect(h2Value).toBe('Contador');
    })

    test('el valor por defecto debe ser 100 en el p', () => {
        const wrapper = shallowMount(Counter);
        const p = wrapper.findAll('p')[1];
        expect(p.text()).toBe('100');
    })
    
    
});