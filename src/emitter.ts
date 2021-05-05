/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { Vertex, Edge } from 'lsif-protocol'
import { Options } from './main'
import { Writer } from './writer'

export interface Emitter {
  options: Options
  emit(element: Vertex | Edge): void
}

export function create(writer: Writer, options: Options): Emitter {
  return {
    options: options,
    emit: (element) => writer.writeln(JSON.stringify(element, undefined, 0)),
  }
}
