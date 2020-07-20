class App {
    constructor(el) {
        this.appElement = document.querySelector(el);
        this.components = {};
    }

    addComponent(component) {
        this.components[component.name] = component;
    }

    showComponent(name) {
        this.currentComponent = this.components[name];
        this.updateView();
    }

    updateView() {
        if (this.currentComponent) {
            this.appElement.innerHTML = this.currentComponent.view(this.currentComponent.model);
        }
    }
}

export default App;