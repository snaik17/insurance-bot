module.exports = {

    createRecord: function (identifier, name) {

        data = {
            name: name,
            id: identifier,
            birthday: '',
            gender: '',
            address: {
                number: '',
                street: '',
                state: '',
                country: '',
                postcode: ''
            },
            logins: [],
            policies: [{
                policy: 'health',
                categories: [{
                        category: 'vision',
                        symbol: '',
                        coverage: [{
                                item: 'Eye Test',
                                limit: 100,
                                available: 0,
                                window: 2,
                                instances: 1,
                                begin: '2016-01-01',
                                percentage: 80,
                                claims: [{
                                    date: '2016-05-17',
                                    amount: 80
                        }]
                            },
                            {
                                item: 'Eye Wear',
                                limit: 300,
                                available: 30,
                                window: 2,
                                instances: 'limit',
                                begin: '2016-01-01',
                                percentage: 80,
                                claims: [{
                                    date: '2016-05-17',
                                    amount: 337.50
                        }]
                    }]
                },
                    {
                        category: 'dental',
                        symbol: '',
                        coverage: [{
                            item: 'Cleaning',
                            limit: 'unlimited',
                            window: 1,
                            instances: 6,
                            begin: '2016-01-01',
                            percentage: 90,
                            claims: []
            }, {
                            item: 'Orthodontics',
                            limit: 3000,
                            window: 'lifetime',
                            instances: 'limit',
                            begin: '2016-01-01',
                            percentage: 80,
                            claims: []
            }, {
                            item: 'X-Ray',
                            limit: 'unlimited',
                            window: 1,
                            instances: 1,
                            begin: '2016-01-01',
                            percentage: 90,
                            claims: []
                        }]
                    }]
            }]
        }
        return data;
    }
}