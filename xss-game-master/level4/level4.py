import webapp2 as webapp
import os
import jinja2

def render(tpl_path, context = {}):
    path, filename = os.path.split(tpl_path)
    return jinja2.Environment(
        loader=jinja2.FileSystemLoader(path or './')
    ).get_template(filename).render(context)

class MainPage(webapp.RequestHandler):
 
  def get(self):
    self.response.headers.add_header("X-XSS-Protection", "1")
 
    if not self.request.get('timer'):
      # Show main timer page
      self.response.out.write(render('index.html'))
    else:
      # Show the results page
      timer= None
      try:
        timer = int(self.request.get('timer', 0))
      except:
        timer = 5
      self.response.out.write(render('timer.html', { 'timer' : timer }))
     
    return
 
application = webapp.WSGIApplication([ ('.*', MainPage), ], debug=False)

def main():
    from paste import httpserver
    httpserver.serve(application, host='127.0.0.1', port='8080')

if __name__ == '__main__':
    main()