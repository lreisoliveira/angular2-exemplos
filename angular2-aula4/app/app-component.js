System.register(['angular2/core', './cep-pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cep_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cep_pipe_1_1) {
                cep_pipe_1 = cep_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.texto = 'Curso de Angular 2.';
                    this.valor = 1096.87;
                    this.dataAtual = new Date();
                    this.formato = true;
                    this.cep = '09454435';
                }
                Object.defineProperty(AppComponent.prototype, "formatar", {
                    get: function () {
                        return this.formato ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yy';
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.mudarFormato = function () {
                    this.formato = !this.formato;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: "\n  \t<h1>Angular 2 - Aula 4</h1>\n  \t<p>Caixa alta: {{texto | uppercase}}</p>\n  \t<p>Caixa baixa: {{texto | lowercase}}</p>\n  \t<p>Valor: {{valor | currency:'BRL':true}}</p>\n  \t<p>Data: {{dataAtual | date:'dd/MM/yyyy'}}</p>\n  \t<p>Data din\u00E2mica: {{dataAtual | date:formatar}}</p>\n  \t<p><button (click)=\"mudarFormato()\">Mudar formato</button></p>\n  \t<p>CEP: {{cep | cep}}</p>\n  \t",
                        pipes: [cep_pipe_1.CepPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map