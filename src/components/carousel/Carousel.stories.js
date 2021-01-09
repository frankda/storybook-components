import Carousel from "./Carousel";

export default {
    title: "Carousel",
    component: Carousel,
    excludeStories: /.*Data$/
};

const Template = (args, { argTypes }) => ({
    components: { Carousel },
    props: Object.keys(argTypes),
    template: "<Carousel />"
});

export const CarouselFeatured = Template.bind({});
