export const vertexCode = `
  attribute vec3 a_coordinates;
  varying vec2 v_texcoord;

  void main(void) {
    v_texcoord = a_coordinates.xy;

    gl_Position = vec4(a_coordinates, 1.0);
  }
`;

