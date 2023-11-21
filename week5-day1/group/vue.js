Vue.component('card', {
    props: ['info'],
    template: `
        <div class="card">
            <ul class="card-info card-shadow">
                <li class="card-header">{{ info.title }}</li>
                <li v-for="(value, label) in info.details" class="card-item">
                    <span>{{ value }}</span> {{ label }}
                </li>
                <li class="card-item">
                    <h2 class="card-wide">{{ info.price }}</h2>
                    <span class="card-opacity">{{ info.priceUnit }}</span>
                </li>
                <li class="card-btn">
                    <button class="button">Sign Up</button>
                </li>
            </ul>
        </div>
    `
});

new Vue({
    el: '#app',
    data: {
        premiumInfo: {
            title: 'Premium',
            details: {
                Storage: '50GB',
                Emails: 50,
                Domains: 50,
                Support: 'Endless'
            },
            price: '$ 50',
            priceUnit: 'per month'
        }
    }
});
