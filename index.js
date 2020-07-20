import App from './lib/App.js';
import Router from './/lib/Router.js';

const app = new App('#app');
const router = new Router(app);

app.addComponent({
    name: 'dogs',
    model: {
        dogs: []
    },
    view(model) {
        return `<h2>There are ${model.dogs.length} dogs</h2>`;
    }
});

router.addRoute('dogs', '^#/dogs$');