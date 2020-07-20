export default {
    async getDogs() {
        const response = await fetch('https://barkwireapi.');
        return response.json();
    }
};