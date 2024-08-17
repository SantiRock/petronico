export const fragmentCode = `
  varying highp vec2 v_texcoord;
  uniform highp float u_time;



  void main(void) {
    highp vec2 st = v_texcoord;

    gl_FragColor = vec4(-st.x - 0.5, st.x - 0.5, -st.x -0.5, 1.);
  
  }
`;
