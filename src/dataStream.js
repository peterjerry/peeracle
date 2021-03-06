/*
 * Copyright (c) 2015 peeracle contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// @exclude
var Peeracle = {};
// @endexclude

/* eslint-disable */

Peeracle.DataStream = (function() {
  /**
   * @typedef {Object} DataStreamOptions
   * @property {Uint8Array} buffer
   * @property {String} path
   * @property {String} mode
   * @property {Boolean} littleEndian
   */

  /**
   * Interface for reading and writing to a stream.
   * @interface DataStream
   * @memberof {Peeracle}
   */
  /* istanbul ignore next */
  function DataStream(options) {
  }

  /**
   * Return the total number of bytes.
   * @function DataStream#size
   * @return {Number}
   */
  /* istanbul ignore next */
  DataStream.prototype.size = function size() {
  };

  /**
   * Return the cursor's current position.
   * @function DataStream#tell
   * @return {Number}
   */
  /* istanbul ignore next */
  DataStream.prototype.tell = function tell() {
  };

  /**
   * Move the cursor to a specific position inside the stream.
   * @function DataStream#seek
   * @param {Number} position
   * @return {Number}
   */
  /* istanbul ignore next */
  DataStream.prototype.seek = function seek(position) {
  };

  /**
   * Skip bytes.
   * @function DataStream#skip
   * @param {Number} length
   */
  /* istanbul ignore next */
  DataStream.prototype.skip = function skip(length) {
  };

  /**
   * Reads up to length bytes of data starting at the internal cursor, then pass
   * them as an argument inside cb and increase the internal cursor.
   * @function DataStream#read
   * @param {Number} length
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.read = function read(length, cb) {
  };

  /**
   * Reads one signed char starting at the internal cursor, then pass it as an
   * argument inside cb and increase the internal cursor.
   * @function DataStream#readChar
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readChar = function readChar(cb) {
    this.read(1, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getInt8(0), length);
    });
  };

  /**
   * Reads one unsigned byte starting at the internal cursor, then pass it as an
   * argument inside cb and increase the internal cursor.
   * @function DataStream#readByte
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readByte = function readByte(cb) {
    this.read(1, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getUint8(0), length);
    });
  };

  /**
   * Reads one signed short starting at the internal cursor, then pass it as an
   * argument inside cb and increase the internal cursor.
   * @function DataStream#readShort
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readShort = function readShort(cb) {
    var _this = this;
    this.read(2, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getInt16(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one unsigned short starting at the internal cursor, then pass it as
   * an argument inside cb and increase the internal cursor.
   * @function DataStream#readUShort
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readUShort = function readUShort(cb) {
    var _this = this;
    this.read(2, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getUint16(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one signed integer starting at the internal cursor, then pass it as
   * an argument inside cb and increase the internal cursor.
   * @function DataStream#readInteger
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readInteger = function readInteger(cb) {
    var _this = this;
    this.read(4, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getInt32(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one unsigned integer starting at the internal cursor, then pass it as
   * an argument inside cb and increase the internal cursor.
   * @function DataStream#readUInteger
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readUInteger = function readUInteger(cb) {
    var _this = this;
    this.read(4, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getUint32(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one 64-bits unsigned integer starting at the internal cursor,
   * then pass it as an argument inside cb and increase the internal cursor.
   * @function DataStream#readUInteger64
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readUInteger64 = function readUInteger64(cb) {
    var _this = this;
    var high;
    var low;

    this.read(8, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);

      if (_this.littleEndian) {
        low = dataView.getUint32(0, true);
        high = dataView.getUint32(4, true);
      } else {
        high = dataView.getUint32(0, false);
        low = dataView.getUint32(4, false);
      }

      if (high > 0x1FFFFF) {
        cb(new RangeError('Overflow reading 64-bit value.'));
        return;
      }

      cb(null, (high * Math.pow(2, 32)) + low, length);
    });
  };

  /**
   * Reads one float starting at the internal cursor, then pass it as an
   * argument inside cb and increase the internal cursor.
   * @function DataStream#readFloat
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readFloat = function readFloat(cb) {
    var _this = this;
    this.read(4, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getFloat32(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one double starting at the internal cursor, then pass it as an
   * argument inside cb and increase the internal cursor.
   * @function DataStream#readDouble
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readDouble = function readDouble(cb) {
    var _this = this;
    this.read(8, function readCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getFloat64(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads a string starting at the internal cursor, then pass it as an argument
   * inside cb and increase the internal cursor.
   * @function DataStream#readString
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.readString = function readString(cb) {
    var stringLength = 0;
    var str = '';
    var _this = this;
    var realCb = ((typeof length) === 'function') ? length : cb;

    this.readChar(function peekCharCb(error, value, count) {
      if (error) {
        realCb(error);
        return;
      }

      if (!value || !count) {
        realCb(null, str, stringLength);
        return;
      }

      str += String.fromCharCode(value);
      ++stringLength;
      _this.readChar(peekCharCb);
    });
  };

  /**
   * Reads up to length bytes of data starting at the internal cursor, then pass
   * them as an argument inside cb.
   * @function DataStream#peek
   * @param {Number} length
   * @param {DataStream~readCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.peek = function peek(length, cb) {
  };

  /**
   * Reads one signed char starting at the internal cursor, then pass it as an
   * argument inside cb.
   * @function DataStream#peekChar
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekChar = function peekChar(cb) {
    this.peek(1, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getInt8(0), length);
    });
  };

  /**
   * Reads one unsigned char starting at the internal cursor, then pass it as an
   * argument inside cb.
   * @function DataStream#peekByte
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekByte = function peekByte(cb) {
    this.peek(1, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getUint8(0), length);
    });
  };

  /**
   * Reads one signed short starting at the internal cursor, then pass it as an
   * argument inside cb.
   * @function DataStream#peekShort
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekShort = function peekShort(cb) {
    var _this = this;
    this.peek(2, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getInt16(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one unsigned short starting at the internal cursor, then pass it as
   * an argument inside cb.
   * @function DataStream#peekUShort
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekUShort = function peekUShort(cb) {
    var _this = this;
    this.peek(2, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getUint16(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one signed integer starting at the internal cursor, then pass it as
   * an argument inside cb.
   * @function DataStream#peekInteger
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekInteger = function peekInteger(cb) {
    var _this = this;
    this.peek(4, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getInt32(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one unsigned integer starting at the internal cursor, then pass it as
   * an argument inside cb.
   * @function DataStream#peekUInteger
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekUInteger = function peekUInteger(cb) {
    var _this = this;
    this.peek(4, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getUint32(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one float starting at the internal cursor, then pass it as an
   * argument inside cb.
   * @function DataStream#peekFloat
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekFloat = function peekFloat(cb) {
    var _this = this;
    this.peek(4, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getFloat32(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads one double starting at the internal cursor, then pass it as an
   * argument inside cb.
   * @function DataStream#peekDouble
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekDouble = function peekDouble(cb) {
    var _this = this;
    this.peek(8, function peekCb(error, bytes, length) {
      /** @type {DataView} */
      var dataView;

      if (error) {
        cb(error);
        return;
      }

      dataView = new DataView(bytes.buffer);
      cb(null, dataView.getFloat64(0, _this.littleEndian), length);
    });
  };

  /**
   * Reads a string starting at the internal cursor, then pass it as an argument
   * inside cb.
   * @function DataStream#peekString
   * @param {DataStream~readCallback} cb
   */
  DataStream.prototype.peekString = function peekString(cb) {
    var stringLength = 0;
    var str = '';

    this.peekChar(function peekCb(error, value, length) {
      if (error) {
        cb(error);
        return;
      }

      if (!value || !length) {
        cb(null, str, stringLength);
        return;
      }

      str += value;
      ++stringLength;
      this.readChar(peekCb);
    });
  };

  /**
   * Writes up to length bytes of data at the internal cursor, then pass the
   * number of written bytes as an argument inside cb and increase the internal
   * cursor.
   * @function DataStream#write
   * @param {Uint8Array} bytes
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.write = function write(bytes, cb) {
  };

  /**
   * Writes a signed char at the internal cursor, then pass the number of
   * written bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeChar
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeChar = function writeChar(value, cb) {
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(1);

    dataView = new DataView(bytes.buffer);
    dataView.setInt8(0, value);
    this.write(bytes, cb);
  };

  /**
   * Writes an unsigned char at the internal cursor, then pass the number of
   * written bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeByte
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeByte = function writeByte(value, cb) {
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(1);

    dataView = new DataView(bytes.buffer);
    dataView.setUint8(0, value);
    this.write(bytes, cb);
  };

  /**
   * Writes a signed short at the internal cursor, then pass the number of
   * written bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeShort
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeShort = function writeShort(value, cb) {
    // @exclude
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(2);

    dataView = new DataView(bytes.buffer);
    dataView.setInt16(0, value, this.littleEndian);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Writes an unsigned short at the internal cursor, then pass the number of
   * written bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeUShort
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeUShort = function writeUShort(value, cb) {
    // @exclude
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(2);

    dataView = new DataView(bytes.buffer);
    dataView.setUint16(0, value, this.littleEndian);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Writes an integer at the internal cursor, then pass the number of written
   * bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeInteger
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeInteger = function writeInteger(value, cb) {
    // @exclude
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(4);

    dataView = new DataView(bytes.buffer);
    dataView.setInt32(0, value, this.littleEndian);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Writes an unsigned integer at the internal cursor, then pass the number of
   * written bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeUInteger
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeUInteger = function writeUInteger(value, cb) {
    // @exclude
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(4);

    dataView = new DataView(bytes.buffer);
    dataView.setUint32(0, value, this.littleEndian);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Writes a float at the internal cursor, then pass the number of written
   * bytesas an argument inside cb and increase the internal cursor.
   * @function DataStream#writeFloat
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeFloat = function writeFloat(value, cb) {
    // @exclude
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(4);

    dataView = new DataView(bytes.buffer);
    dataView.setFloat32(0, value, this.littleEndian);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Writes a double at the internal cursor, then pass the number of written
   * bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeDouble
   * @param {Number} value
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeDouble = function writeDouble(value, cb) {
    // @exclude
    /** @type {DataView} */
    var dataView;
    var bytes = new Uint8Array(8);

    dataView = new DataView(bytes.buffer);
    dataView.setFloat64(0, value, this.littleEndian);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Writes a string at the internal cursor, then pass the number of written
   * bytes as an argument inside cb and increase the internal cursor.
   * @function DataStream#writeString
   * @param {String} str
   * @param {DataStream~writeCallback} cb
   */
  /* istanbul ignore next */
  DataStream.prototype.writeString = function writeString(str, cb) {
    // @exclude
    var index = 0;
    var length = str.length;
    var bytes = new Uint8Array(length + 1);

    while (index < length) {
      bytes.set([str.charCodeAt(index)], index);
      ++index;
    }

    bytes.set([0], index);
    this.write(bytes, cb);
    // @endexclude
  };

  /**
   * Callback function for reading methods. error will be an instance of Error
   * if the call has failed, it will be null otherwise. value contains the
   * result of the read method, and length contains the number of bytes that
   * have been read.
   * @callback DataStream~readCallback
   * @param {Error} error
   * @param {Number|String|Uint8Array} value
   * @param {Number} length
   */

  /**
   * Callback function for writing methods. error will be an instance of Error
   * if the call has failed, it will be null otherwise. length contains the
   * number of bytes that have been written.
   * @callback DataStream~writeCallback
   * @param {Error} error
   * @param {Number} length
   */

  return DataStream;
})();

// @exclude
module.exports = Peeracle.DataStream;
// @endexclude
