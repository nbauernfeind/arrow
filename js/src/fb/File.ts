// automatically generated by the FlatBuffers compiler, do not modify

import { flatbuffers } from 'flatbuffers';
import * as NS13596923344997147894 from './Schema';
/**
 * ----------------------------------------------------------------------
 * Arrow File metadata
 *
 *
 * @constructor
 */
export class Footer {
    bb: flatbuffers.ByteBuffer | null = null;

    bb_pos: number = 0;
    /**
     * @param number i
     * @param flatbuffers.ByteBuffer bb
     * @returns Footer
     */
    __init(i: number, bb: flatbuffers.ByteBuffer): Footer {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }

    /**
     * @param flatbuffers.ByteBuffer bb
     * @param Footer= obj
     * @returns Footer
     */
    static getRootAsFooter(bb: flatbuffers.ByteBuffer, obj?: Footer): Footer {
        return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }

    /**
     * @param flatbuffers.ByteBuffer bb
     * @param Footer= obj
     * @returns Footer
     */
    static getSizePrefixedRootAsFooter(bb: flatbuffers.ByteBuffer, obj?: Footer): Footer {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }

    /**
     * @returns MetadataVersion
     */
    version(): NS13596923344997147894.MetadataVersion {
        const offset = this.bb!.__offset(this.bb_pos, 4);
        return offset ? /**  */ (this.bb!.readInt16(this.bb_pos + offset)) : NS13596923344997147894.MetadataVersion.V1;
    }

    /**
     * @param Schema= obj
     * @returns Schema|null
     */
    schema(obj?: NS13596923344997147894.Schema): NS13596923344997147894.Schema | null {
        const offset = this.bb!.__offset(this.bb_pos, 6);
        return offset ? (obj || new NS13596923344997147894.Schema()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
    }

    /**
     * @param number index
     * @param Block= obj
     * @returns Block
     */
    dictionaries(index: number, obj?: Block): Block | null {
        const offset = this.bb!.__offset(this.bb_pos, 8);
        return offset ? (obj || new Block()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 24, this.bb!) : null;
    }

    /**
     * @returns number
     */
    dictionariesLength(): number {
        const offset = this.bb!.__offset(this.bb_pos, 8);
        return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
    }

    /**
     * @param number index
     * @param Block= obj
     * @returns Block
     */
    recordBatches(index: number, obj?: Block): Block | null {
        const offset = this.bb!.__offset(this.bb_pos, 10);
        return offset ? (obj || new Block()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 24, this.bb!) : null;
    }

    /**
     * @returns number
     */
    recordBatchesLength(): number {
        const offset = this.bb!.__offset(this.bb_pos, 10);
        return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
    }

    /**
     * User-defined metadata
     *
     * @param number index
     * @param KeyValue= obj
     * @returns KeyValue
     */
    customMetadata(index: number, obj?: NS13596923344997147894.KeyValue): NS13596923344997147894.KeyValue | null {
        const offset = this.bb!.__offset(this.bb_pos, 12);
        return offset ? (obj || new NS13596923344997147894.KeyValue()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
    }

    /**
     * @returns number
     */
    customMetadataLength(): number {
        const offset = this.bb!.__offset(this.bb_pos, 12);
        return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
    }

    /**
     * @param flatbuffers.Builder builder
     */
    static startFooter(builder: flatbuffers.Builder) {
        builder.startObject(5);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param MetadataVersion version
     */
    static addVersion(builder: flatbuffers.Builder, version: NS13596923344997147894.MetadataVersion) {
        builder.addFieldInt16(0, version, NS13596923344997147894.MetadataVersion.V1);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset schemaOffset
     */
    static addSchema(builder: flatbuffers.Builder, schemaOffset: flatbuffers.Offset) {
        builder.addFieldOffset(1, schemaOffset, 0);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset dictionariesOffset
     */
    static addDictionaries(builder: flatbuffers.Builder, dictionariesOffset: flatbuffers.Offset) {
        builder.addFieldOffset(2, dictionariesOffset, 0);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param number numElems
     */
    static startDictionariesVector(builder: flatbuffers.Builder, numElems: number) {
        builder.startVector(24, numElems, 8);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset recordBatchesOffset
     */
    static addRecordBatches(builder: flatbuffers.Builder, recordBatchesOffset: flatbuffers.Offset) {
        builder.addFieldOffset(3, recordBatchesOffset, 0);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param number numElems
     */
    static startRecordBatchesVector(builder: flatbuffers.Builder, numElems: number) {
        builder.startVector(24, numElems, 8);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset customMetadataOffset
     */
    static addCustomMetadata(builder: flatbuffers.Builder, customMetadataOffset: flatbuffers.Offset) {
        builder.addFieldOffset(4, customMetadataOffset, 0);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param Array.<flatbuffers.Offset> data
     * @returns flatbuffers.Offset
     */
    static createCustomMetadataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }

    /**
     * @param flatbuffers.Builder builder
     * @param number numElems
     */
    static startCustomMetadataVector(builder: flatbuffers.Builder, numElems: number) {
        builder.startVector(4, numElems, 4);
    }

    /**
     * @param flatbuffers.Builder builder
     * @returns flatbuffers.Offset
     */
    static endFooter(builder: flatbuffers.Builder): flatbuffers.Offset {
        const offset = builder.endObject();
        return offset;
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset offset
     */
    static finishFooterBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
        builder.finish(offset);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Offset offset
     */
    static finishSizePrefixedFooterBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset) {
        builder.finish(offset, undefined, true);
    }

    static createFooter(builder: flatbuffers.Builder, version: NS13596923344997147894.MetadataVersion, schemaOffset: flatbuffers.Offset, dictionariesOffset: flatbuffers.Offset, recordBatchesOffset: flatbuffers.Offset, customMetadataOffset: flatbuffers.Offset): flatbuffers.Offset {
        Footer.startFooter(builder);
        Footer.addVersion(builder, version);
        Footer.addSchema(builder, schemaOffset);
        Footer.addDictionaries(builder, dictionariesOffset);
        Footer.addRecordBatches(builder, recordBatchesOffset);
        Footer.addCustomMetadata(builder, customMetadataOffset);
        return Footer.endFooter(builder);
    }
}
/**
 * @constructor
 */
export class Block {
    bb: flatbuffers.ByteBuffer | null = null;

    bb_pos: number = 0;
    /**
     * @param number i
     * @param flatbuffers.ByteBuffer bb
     * @returns Block
     */
    __init(i: number, bb: flatbuffers.ByteBuffer): Block {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }

    /**
     * Index to the start of the RecordBlock (note this is past the Message header)
     *
     * @returns flatbuffers.Long
     */
    offset(): flatbuffers.Long {
        return this.bb!.readInt64(this.bb_pos);
    }

    /**
     * Length of the metadata
     *
     * @returns number
     */
    metaDataLength(): number {
        return this.bb!.readInt32(this.bb_pos + 8);
    }

    /**
     * Length of the data (this is aligned so there can be a gap between this and
     * the metadata).
     *
     * @returns flatbuffers.Long
     */
    bodyLength(): flatbuffers.Long {
        return this.bb!.readInt64(this.bb_pos + 16);
    }

    /**
     * @param flatbuffers.Builder builder
     * @param flatbuffers.Long offset
     * @param number metaDataLength
     * @param flatbuffers.Long bodyLength
     * @returns flatbuffers.Offset
     */
    static createBlock(builder: flatbuffers.Builder, offset: flatbuffers.Long, metaDataLength: number, bodyLength: flatbuffers.Long): flatbuffers.Offset {
        builder.prep(8, 24);
        builder.writeInt64(bodyLength);
        builder.pad(4);
        builder.writeInt32(metaDataLength);
        builder.writeInt64(offset);
        return builder.offset();
    }

}
