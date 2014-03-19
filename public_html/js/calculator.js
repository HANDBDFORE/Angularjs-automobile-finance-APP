'use strict';

angular.module('CalculatorModule', []).
        factory('Calculator', function() {
            var calculator = {
                // {capital,rate,periods,month,repayment_capital}
                // average capital plus interest
                ACPIT: {
                    I: {
                        capital: 0,
                        rate: 0,
                        periods: 0,
                        variable: {
                            month: 1,
                            repayment_capital: 0
                        },
                        clear: function() {
                            this.capital =
                                    this.periods =
                                    this.rate = 0;
                            this.variable.month = 1;
                            this.variable.repayment_capital = 0;
                        },
                        setVal: function(capital, rate, periods) {
                            this.capital = capital;
                            this.periods = periods;
                            this.rate = rate;
                        }
                    },
                    monthly_capital_interest: function() {
                        var info = this.I;
                        var formula = (info.capital * info.rate * Math.pow((1 + info.rate), info.periods)) /
                                (Math.pow((1 + info.rate), info.periods) - 1);
                        return formula;
                    },
                    monthly_capital: function() {
                        var info = this.I;
                        var formula = (info.capital * info.rate * Math.pow((1 + info.rate), (info.variable.month - 1))) /
                                (Math.pow((1 + info.rate), info.periods) - 1);
                        return formula;
                    },
                    monthly_interest: function(monthly_capital_interest, monthly_capital) {
                        return monthly_capital_interest - monthly_capital;
                    },
                    remaining_capital: function() {
                        var info = this.I;
                        return info.capital - info.variable.repayment_capital;
                    },
                    main: function(month, repayment_capital) {
                        var info = this.I,
                                res = {};
                        info.variable.month = month || 1;
                        info.variable.repayment_capital = repayment_capital || 0;

                        res.monthly_capital_interest = this.monthly_capital_interest();
                        res.monthly_capital = this.monthly_capital();
                        res.monthly_interest = this.monthly_interest(res.monthly_capital_interest, res.monthly_capital);

                        info.variable.repayment_capital += res.monthly_capital;
                        res.remaining_capital = this.remaining_capital();

                        return res;
                    }
                },
                // average capital
                ACPT: {
                    I: {
                        capital: 0,
                        rate: 0,
                        periods: 0,
                        variable: {
                            month: 1,
                            repayment_capital: 0
                        },
                        clear: function() {
                            this.capital =
                                    this.periods =
                                    this.rate = 0;
                            this.variable.month = 1;
                            this.variable.repayment_capital = 0;
                        },
                        setVal: function(capital, rate, periods) {
                            this.capital = capital;
                            this.periods = periods;
                            this.rate = rate;
                        }
                    },
                    monthly_capital_interest: function() {
                        var info = this.I;
                        var formula = (info.capital / info.periods) +
                                (info.capital * info.rate * (1 - (info.variable.month - 1) / info.periods));
                        return formula;
                    },
                    monthly_capital: function() {
                        var info = this.I;
                        var formula = info.capital / info.periods;
                        return formula;
                    },
                    monthly_interest: function(monthly_capital_interest, monthly_capital) {
                        var info = this.I;
                        var formula = info.capital * info.rate * (1 - (info.variable.month - 1) / info.periods);
                        return formula;
                    },
                    remaining_capital: function() {
                        var info = this.I;
                        return info.capital - info.variable.repayment_capital;
                    },
                    main: function(month, repayment_capital) {
                        var info = this.I,
                                res = {};
                        info.variable.month = month || 1;
                        info.variable.repayment_capital = repayment_capital || 0;

                        res.monthly_capital_interest = this.monthly_capital_interest();
                        res.monthly_capital = this.monthly_capital();
                        res.monthly_interest = this.monthly_interest(res.monthly_capital_interest, res.monthly_capital);

                        info.variable.repayment_capital += res.monthly_capital;
                        res.remaining_capital = this.remaining_capital();
                        return res;
                    }
                }
            };

            return calculator;
        });

