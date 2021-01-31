import defaultValue from "./defaultValue.js";
import Check from "./Check.js";

/**
 * A 4x4 matrix, indexable as a column-major order array.
 * Constructor parameters are in row-major order for code readability.
 * @alias Matrix4
 * @constructor
 *
 * @param {Number} [column0Row0=0.0] The value for column 0, row 0.
 * @param {Number} [column1Row0=0.0] The value for column 1, row 0.
 * @param {Number} [column2Row0=0.0] The value for column 2, row 0.
 * @param {Number} [column3Row0=0.0] The value for column 3, row 0.
 * @param {Number} [column0Row1=0.0] The value for column 0, row 1.
 * @param {Number} [column1Row1=0.0] The value for column 1, row 1.
 * @param {Number} [column2Row1=0.0] The value for column 2, row 1.
 * @param {Number} [column3Row1=0.0] The value for column 3, row 1.
 * @param {Number} [column0Row2=0.0] The value for column 0, row 2.
 * @param {Number} [column1Row2=0.0] The value for column 1, row 2.
 * @param {Number} [column2Row2=0.0] The value for column 2, row 2.
 * @param {Number} [column3Row2=0.0] The value for column 3, row 2.
 * @param {Number} [column0Row3=0.0] The value for column 0, row 3.
 * @param {Number} [column1Row3=0.0] The value for column 1, row 3.
 * @param {Number} [column2Row3=0.0] The value for column 2, row 3.
 * @param {Number} [column3Row3=0.0] The value for column 3, row 3.
 *
 */
function XzMatrix4(column0Row0, column1Row0, column2Row0, column3Row0,
                 column0Row1, column1Row1, column2Row1, column3Row1,
                 column0Row2, column1Row2, column2Row2, column3Row2,
                 column0Row3, column1Row3, column2Row3, column3Row3) {
    this[0] = defaultValue(column0Row0, 0.0);
    this[1] = defaultValue(column0Row1, 0.0);
    this[2] = defaultValue(column0Row2, 0.0);
    this[3] = defaultValue(column0Row3, 0.0);
    this[4] = defaultValue(column1Row0, 0.0);
    this[5] = defaultValue(column1Row1, 0.0);
    this[6] = defaultValue(column1Row2, 0.0);
    this[7] = defaultValue(column1Row3, 0.0);
    this[8] = defaultValue(column2Row0, 0.0);
    this[9] = defaultValue(column2Row1, 0.0);
    this[10] = defaultValue(column2Row2, 0.0);
    this[11] = defaultValue(column2Row3, 0.0);
    this[12] = defaultValue(column3Row0, 0.0);
    this[13] = defaultValue(column3Row1, 0.0);
    this[14] = defaultValue(column3Row2, 0.0);
    this[15] = defaultValue(column3Row3, 0.0);
}

XzMatrix4.inverseTransformation = function(matrix, result) {
    //>>includeStart('debug', pragmas.debug);
    Check.typeOf.object('matrix', matrix);
    Check.typeOf.object('result', result);
    //>>includeEnd('debug');

    //This function is an optimized version of the below 4 lines.
    //var rT = Matrix3.transpose(Matrix4.getMatrix3(matrix));
    //var rTN = Matrix3.negate(rT);
    //var rTT = Matrix3.multiplyByVector(rTN, Matrix4.getTranslation(matrix));
    //return Matrix4.fromRotationTranslation(rT, rTT, result);

    var matrix0 = matrix[0];
    var matrix1 = matrix[1];
    var matrix2 = matrix[2];
    var matrix4 = matrix[4];
    var matrix5 = matrix[5];
    var matrix6 = matrix[6];
    var matrix8 = matrix[8];
    var matrix9 = matrix[9];
    var matrix10 = matrix[10];

    var vX = matrix[12];
    var vY = matrix[13];
    var vZ = matrix[14];

    var x = -matrix0 * vX - matrix1 * vY - matrix2 * vZ;
    var y = -matrix4 * vX - matrix5 * vY - matrix6 * vZ;
    var z = -matrix8 * vX - matrix9 * vY - matrix10 * vZ;

    result[0] = matrix0;
    result[1] = matrix4;
    result[2] = matrix8;
    result[3] = 0.0;
    result[4] = matrix1;
    result[5] = matrix5;
    result[6] = matrix9;
    result[7] = 0.0;
    result[8] = matrix2;
    result[9] = matrix6;
    result[10] = matrix10;
    result[11] = 0.0;
    result[12] = x;
    result[13] = y;
    result[14] = z;
    result[15] = 1.0;
    return result;
};

XzMatrix4.multiplyByPoint = function(matrix, cartesian, result) {
    //>>includeStart('debug', pragmas.debug);
    Check.typeOf.object('matrix', matrix);
    Check.typeOf.object('cartesian', cartesian);
    Check.typeOf.object('result', result);
    //>>includeEnd('debug');

    var vX = cartesian.x;
    var vY = cartesian.y;
    var vZ = cartesian.z;

    var x = matrix[0] * vX + matrix[4] * vY + matrix[8] * vZ + matrix[12];
    var y = matrix[1] * vX + matrix[5] * vY + matrix[9] * vZ + matrix[13];
    var z = matrix[2] * vX + matrix[6] * vY + matrix[10] * vZ + matrix[14];

    result.x = x;
    result.y = y;
    result.z = z;
    return result;
};



export default XzMatrix4;