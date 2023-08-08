import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision";


describe('Indecision Component',()=>{
    let wrapper = null;

    beforeEach(()=>{
        wrapper = shallowMount(Indecision);
    });

    test('debe hacer match con el snapts', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
    
});