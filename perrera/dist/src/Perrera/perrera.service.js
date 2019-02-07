"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const perrera_entity_1 = require("./perrera-entity");
let PerreraService = class PerreraService {
    constructor(_perreraRepository) {
        this._perreraRepository = _perreraRepository;
    }
    crear(nuevoPerrera) {
        return __awaiter(this, void 0, void 0, function* () {
            const perreraEntity = this._perreraRepository
                .create(nuevoPerrera);
            const perreraCreado = yield this._perreraRepository
                .save(perreraEntity);
            return perreraCreado;
        });
    }
    buscar(parametros) {
        return this._perreraRepository.find(parametros);
    }
    buscarPorId(idPerrera) {
        return this._perreraRepository.findOne(idPerrera);
    }
    borrar(idPerrera) {
        const perreraEntityAEliminar = this._perreraRepository
            .create({
            idPerrera: idPerrera
        });
        return this._perreraRepository.remove(perreraEntityAEliminar);
    }
    actualizar(idPerrera, nuevoPerrera) {
        nuevoPerrera.idPerrera = idPerrera;
        const perreraEntity = this._perreraRepository.create(nuevoPerrera);
        return this._perreraRepository.save(perreraEntity);
    }
};
PerreraService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(perrera_entity_1.PerreraEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PerreraService);
exports.PerreraService = PerreraService;
//# sourceMappingURL=perrera.service.js.map