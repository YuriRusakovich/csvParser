"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 import {} from 'should';
 if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
 import 'mocha';
*/
describe('API Types', () => {
    describe('options', () => {
        it('cast', () => {
            const options = {};
            options.cast = true;
            options.cast = () => { };
        });
        it('cast_date', () => {
            const options = {};
            options.cast_date = true;
        });
        it('columns', () => {
            const options = {};
            options.columns = true;
            options.columns = [];
            options.columns = (record) => {
                const val = record.length > 1;
                return val;
            };
            options.columns = (record) => {
                const fields = record.map((field) => {
                    return field.toUpperCase();
                });
                return fields;
            };
        });
        it('delimiter', () => {
            const options = {};
            options.delimiter = ':';
            options.delimiter = Buffer.from(':');
        });
        it('escape', () => {
            const options = {};
            options.escape = ':';
            options.escape = Buffer.from('"');
        });
        it('from', () => {
            const options = {};
            options.from = 10;
        });
        // it('from_line', () => {
        //   const options: Options = {};
        //   options.from_line = 10;
        // });
        it('ltrim', () => {
            const options = {};
            options.ltrim = true;
        });
        it('max_record_size', () => {
            const options = {};
            options.max_record_size = 100;
        });
        it('objname', () => {
            const options = {};
            options.objname = 'name';
        });
        it('quote', () => {
            const options = {};
            options.quote = '"';
            options.quote = true;
            options.quote = Buffer.from('"');
        });
        it('relax', () => {
            const options = {};
            options.relax = true;
        });
        it('relax_column_count', () => {
            const options = {};
            options.relax_column_count = true;
        });
        it('raw', () => {
            const options = {};
            options.raw = true;
        });
        it('rowDelimiter', () => {
            const options = {};
            options.rowDelimiter = '\n';
            options.rowDelimiter = ['\n'];
            options.rowDelimiter = Buffer.from('\n');
            options.rowDelimiter = [Buffer.from('\n')];
        });
        it('rtrim', () => {
            const options = {};
            options.rtrim = true;
        });
        it('skip_empty_lines', () => {
            const options = {};
            options.skip_empty_lines = true;
        });
        it('skip_empty_lines', () => {
            const options = {};
            options.skip_empty_lines = true;
        });
        it('skip_lines_with_error', () => {
            const options = {};
            options.skip_empty_lines = true;
        });
        it('to', () => {
            const options = {};
            options.to = 10;
        });
        // it('to_line', () => {
        //   const options: Options = {};
        //   options.to_line = 10;
        // });
        it('trim', () => {
            const options = {};
            options.trim = true;
        });
    });
});
//# sourceMappingURL=api.types.js.map