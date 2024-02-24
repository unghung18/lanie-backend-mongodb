"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_color_dto_1 = require("./create-color.dto");
class UpdateColorDto extends (0, mapped_types_1.PartialType)(create_color_dto_1.CreateColorDto) {
}
exports.UpdateColorDto = UpdateColorDto;
//# sourceMappingURL=update-color.dto.js.map